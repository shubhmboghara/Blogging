import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Select, Button, RTE } from "../index";
import appwriteService from "../../appwrite/confing";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    control,
    getValues,
  } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  const [preview, setPreview] = useState(
    post && post.featuredlmage ? appwriteService.getFileUrl(post.featuredlmage) : null
  );

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const currentUserId =
    (userData && (userData.$id || userData.id || userData.userId)) || "";

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      let slug = value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s+/g, "-");
      slug = slug.replace(/^[^a-z0-9]+/, "");
      return slug.substring(0, 36);
    }
    return "";
  }, []);

  useEffect(() => {
    if (post) {
      reset({
        title: post.title || "",
        slug: post.slug || "",
        content: post.content || "",
        status: post.status || "active",
      });
    }
  }, [post, reset]);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(
        post && post.featuredlmage ? appwriteService.getFileUrl(post.featuredlmage) : null
      );
    }
  };

  const submit = async (data) => {
    try {
      let file = null;
      let dbPost = null;
      if (post) {
        if (data.image && data.image[0]) {
          file = await appwriteService.uploadFile(data.image[0]);
          if (file && post.featuredlmage) {
            await appwriteService.deleteFile(post.featuredlmage);
          }
        }
        const { image, ...restData } = data;
        dbPost = await appwriteService.updatePost(post.$id, {
          ...restData,
          featuredlmage: file ? file.$id : post.featuredlmage,
        });
      } else {
        if (data.image && data.image[0]) {
          file = await appwriteService.uploadFile(data.image[0]);
          if (file) {
            data.featuredlmage = file.$id;
          }
        } else {
          data.featuredlmage = "";
        }
        dbPost = await appwriteService.createPost({
          ...data,
          userid: currentUserId,
        });
      }
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } catch (err) {
      console.error("Error submitting post:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="grid grid-cols-1 relative right-[2%] left-[5%]">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) =>
            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true })
          }
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
          onChange={onFileChange}
        />
        {preview && (
          <div className="w-full mb-4">
            <img src={preview} alt={post ? post.title : "Preview"} className="rounded-lg" />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}
