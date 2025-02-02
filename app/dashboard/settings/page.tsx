import { getSettings } from "@/app/dashboard/settings/data";
import ClientPage from "@/app/dashboard/settings/components/client-page";
import PageHeader from "@/app/dashboard/settings/components/header-page";
import CompanyData from "@/app/dashboard/settings/components/company-data";

export default async function Settings() {
  const result = await getSettings();

  return (
    <>
      <ClientPage>
        <PageHeader />
        <CompanyData settings={result.settings} companyData={result.companyData} />
      </ClientPage>
    </>
  );
}