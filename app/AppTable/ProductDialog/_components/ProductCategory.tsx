// "use client";
// import { Product } from "@/app/Products/columns";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Dispatch, SetStateAction, useEffect, useState } from "react";

// export function ProductCategory({
//   selectedCategory,
//   setSelectedCategory,
// }: {
//   selectedCategory: string;
//   setSelectedCategory: Dispatch<SetStateAction<Product["category"]>>;
// }) {
//   const categories = [
//     "Electronics",
//     "Furniture",
//     "Clothing",
//     "Books",
//     "Toys",
//     "Beauty",
//     "Sports",
//     "Home Decor",
//     "Home Appliances",
//     "Others",
//   ];

//   const [isClient, setIsClient] = useState(false);
//   useEffect(() => {
//     setIsClient(true);
//     setSelectedCategory("Electronics");
//   }, []);

//   if (!isClient) return null;

//   return (
//     <div className="flex flex-col gap-2 poppins">
//       <Label className="text-slate-600">{`Product's Category`}</Label>

//       <Select
//         value={selectedCategory}
//         onValueChange={(value: string) =>
//           setSelectedCategory(value as Product["category"])
//         }
//       >
//         <SelectTrigger className="h-[45px] shadow-none">
//           <SelectValue placeholder="Select a Category" />
//         </SelectTrigger>
//         <SelectContent className="poppins">
//           {categories.map((category) => (
//             <SelectItem key={category} value={category}>
//               {category}
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>
//     </div>
//   );
// }

"use client";

import { Product } from "@/app/Products/columns";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function ProductCategory({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<Product["category"]>>;
}) {
  const categories = [
    "Accessories",
    "Earbuds",
    "Phone Cover",
    "Phone Case",
    "Charger Cable",
    "Charger Adapter",
    "Screen Protector",
    "Smart Watch",
    "Headphone",
    "Bluetooth Speaker",
    "Others",
  ];

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
    setSelectedCategory("Accessories");
  }, [setSelectedCategory]);

  if (!isClient) return null;

  return (
    <div className="flex flex-col gap-2 poppins">
      <Label className="text-slate-600">{`Product's Category`}</Label>

      <Select
        value={selectedCategory}
        onValueChange={(value: string) =>
          setSelectedCategory(value as Product["category"])
        }
      >
        <SelectTrigger className="h-[45px] shadow-none">
          <SelectValue placeholder="Select a Category" />
        </SelectTrigger>
        <SelectContent className="poppins">
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
