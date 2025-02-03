import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <main className="w-full min-h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <LoaderCircle className="repeat-infinite animate-spin" />
      </div>
    </main>
  );
}
