"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";
import Header from "@/components/Header";
import MultiSelectDropdown from "@/components/MultiSelectDropdown";
const categoriesList = ["Singer", "Dancer", "DJ", "Speaker"];
const languagesList = ["English", "Hindi", "Kannada", "Tamil","Telugu"];

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  bio: Yup.string().required("Bio is required"),
  categories: Yup.array().min(1, "Select at least one category"),
  languages: Yup.array().min(1, "Select at least one language"),
  fee: Yup.string().required("Fee range is required"),
  location: Yup.string().required("Location is required"),
});

export default function OnboardPage() {
  const [image, setImage] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      categories: [],
      languages: [],
    },
  });

  const onSubmit = (data: any) => {
    console.log({
      ...data,
      profileImage: image?.name || "No image uploaded",
    });
    alert("Submitted to console!");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <Header />
      <h1 className="text-2xl font-bold mb-6 text-center mt-6">Artist Onboarding Form</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto bg-white p-6 rounded shadow space-y-4">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input {...register("name")} className="input" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Bio</label>
          <textarea {...register("bio")} rows={3} className="input" />
          {errors.bio && <p className="text-red-500 text-sm">{errors.bio.message}</p>}
        </div>

<Controller
  control={control}
  name="categories"
  render={({ field }) => (
    <MultiSelectDropdown
      label="Category"
      options={["Singer", "Dancer", "DJ", "Speaker"]}
      selected={field.value || []}
      setSelected={field.onChange}
    />
  )}
/>

<Controller
  control={control}
  name="languages"
  render={({ field }) => (
    <MultiSelectDropdown
      label="Languages Spoken"
      options={["English", "Hindi", "Kannada", "Tamil"]}
      selected={field.value || []}
      setSelected={field.onChange}
      allowCustomInput={true}
    />
  )}
/>



        <div>
          <label className="block font-medium mb-1">Fee Range</label>
          <select {...register("fee")} className="input">
            <option value="">Select Fee</option>
            <option value="0-5000">₹0 - ₹5000</option>
            <option value="5000-10000">₹5000 - ₹10,000</option>
            <option value="10000-20000">₹10,000 - ₹20,000</option>
          </select>
          {errors.fee && <p className="text-red-500 text-sm">{errors.fee.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Location</label>
          <input {...register("location")} className="input" />
          {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Profile Image (optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="block"
          />
          {image && <p className="text-sm text-gray-600 mt-1">Selected: {image.name}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
