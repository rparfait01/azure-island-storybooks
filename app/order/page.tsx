import type { Metadata } from "next";
import OrderForm from "../../components/order-form";

export const metadata: Metadata = {
  title: "Order — Azure Island Story Books",
  description:
    "Order a personalized Azure Island storybook. Tell us about your hero, choose your edition, pay with PayPal, and confirm your order.",
};

export default function OrderPage() {
  return (
    <main className="content-section order-section">
      <div className="section-heading">
        <p className="eyebrow">Order your storybook</p>
        <h1>Start Your Child&apos;s Story</h1>
        <p>
          Tell us about your hero, pick the edition you&apos;d like, complete payment
          with PayPal, and confirm your order. We&apos;ll be in touch by email within
          1 business day.
        </p>
      </div>

      <OrderForm />
    </main>
  );
}
