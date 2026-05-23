import OrderForm from "./OrderForm";

type OrderPageProps = {
  searchParams: Promise<{ package?: string | string[] }>;
};

export default async function OrderPage({ searchParams }: OrderPageProps) {
  const params = await searchParams;
  const packageValue = Array.isArray(params.package) ? params.package[0] : params.package;

  return (
    <main className="site-shell">
      <section className="content-section route-section order-page">
        <div className="section-heading">
          <p className="eyebrow">Order form</p>
          <h1 className="page-title">Build Your Child&apos;s Story Brief</h1>
          <p>
            Share the details we need to shape the book around your child, your family, and the
            story experience you want to create.
          </p>
        </div>
        <OrderForm initialPackage={packageValue ?? ""} />
      </section>
    </main>
  );
}
