import SectionContainer from "@/components/SectionContainer";
import { getMetadata } from "@/utils/metadata";

const Page = () => {
  return (
    <SectionContainer>
      <div className="w-full mx-auto max-w-3xl flex flex-col justify-center items-center">
        <h1 className="w-full text-center text-4xl sm:text-6xl font-medium sm:font-bold mt-4 mb-6">Brand</h1>

        <div className="mt-6 sm:mt-12 w-full grid grid-cols-2 gap-6 sm:gap-12">
          <div className="col-span-1 border border-zinc-200 p-4 flex justify-center items-center">
            <img src="/logo.png" alt="Memos" />
          </div>
          <div className="col-span-1 border border-zinc-200 p-4 flex justify-center items-center">
            <img src="/logo-rounded.png" alt="Memos" />
          </div>
        </div>
        <div className="mt-6 sm:mt-12 w-full grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12">
          <div className="col-span-1 sm:col-span-2 border border-zinc-200 p-4 flex justify-center items-center">
            <img src="/full-logo-landscape.png" alt="Memos" />
          </div>
          <div className="col-span-1 border border-zinc-200 p-4 flex justify-center items-center">
            <img src="/full-logo.png" alt="Memos" />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export const metadata = getMetadata({ title: "Brand - Memos", pathname: "/brand" });

export default Page;
