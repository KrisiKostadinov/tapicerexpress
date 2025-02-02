import { getServices } from "@/app/dashboard/services/data";
import ClientPage from "@/app/dashboard/services/components/client-page";
import SaveService from "@/app/dashboard/services/components/service-save";
import PageHeader from "@/app/dashboard/services/components/page-header";
import ServicesListing from "@/app/dashboard/services/components/services-listing";

export default async function Services() {
  const services = await getServices("desc");

  return (
    <>
      <ClientPage>
        <PageHeader />
        <ServicesListing services={services} />
        <SaveService />
      </ClientPage>
    </>
  );
}
