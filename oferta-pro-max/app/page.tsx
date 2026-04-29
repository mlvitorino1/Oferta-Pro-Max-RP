export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="text-center space-y-4 px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-600 mb-4">
          <span className="text-white text-2xl font-bold">O</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          Oferta Pro Max
        </h1>
        <p className="text-lg text-gray-500 max-w-md">
          As melhores ofertas da sua cidade em um só lugar.
        </p>
        <p className="text-sm text-green-600 font-medium">
          Em construção — em breve disponível.
        </p>
      </div>
    </main>
  )
}
