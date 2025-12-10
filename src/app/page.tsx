import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-6">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Become Digital Policies
      </h1>
      <div className="flex gap-4">
        <Link
          href="/become/politicas-de-privacidad"
          className="px-6 py-3 rounded-lg bg-[#00C7B1]/10 text-[#00C7B1] hover:bg-[#00C7B1]/20 transition-colors"
        >
          Políticas de Privacidad
        </Link>
        <Link
          href="/become/terminos-y-condiciones"
          className="px-6 py-3 rounded-lg bg-[#00C7B1]/10 text-[#00C7B1] hover:bg-[#00C7B1]/20 transition-colors"
        >
          Términos y Condiciones
        </Link>
      </div>
    </div>
  );
}
