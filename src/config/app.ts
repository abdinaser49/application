// ============ EDIT YOUR APP INFO HERE ============
import logoA from "@/assets/real/logo.jpg.asset.json";
import homeA from "@/assets/real/home.jpg.asset.json";
import salesA from "@/assets/real/sales.jpg.asset.json";
import invA from "@/assets/real/inventory.png.asset.json";
import anaA from "@/assets/real/analytics.jpg.asset.json";
import setA from "@/assets/real/settings.jpg.asset.json";
import demoA from "@/assets/real/demo.mp4.asset.json";

export const app = {
  name: "Hubaal Sales",
  logo: "/logo.png",
  demoVideo: "/hubal.mp4",
  description:
    "Manage your online business easily. Add products, manage inventory, track sales, view sales history, and understand your business performance — all in one simple app.",
  version: "1.0.0",
  platform: "Android",
  fileType: "APK",
  // Put your APK in public/downloads/ and keep this path in sync
  apkUrl: "/downloads/hubal-store.apk",
  apkFileName: "hubaal-sales-1.0.0.apk",
  price: "$4",
  priceNote: "Simple business management for just $4 per month.",
  screenshots: ["/screenshots/home.jpg", "/screenshots/analytics.jpg", "/screenshots/categories.jpg", "/screenshots/settings.jpg", "/screenshots/splash.jpg"],
  features: [
    "Product Management",
    "Inventory Management",
    "Sales Tracking",
    "Sales History",
    "Business Analytics",
  ],
  supportEmail: "support@hubalstore.com",
};
