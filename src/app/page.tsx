import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24">
      <MaxWidthWrapper
        className=""
      >
        <div
          className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl"
        >
          <h1
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"

          >Your marketplace for high-quality {' '}
            <span
              className="text-blue-600"
            >
              digital assets.
            </span>

          </h1>
          <p>Welcome to {process.env.REACT_APP_APP_NAME} </p>
        </div>
      </MaxWidthWrapper>
    </main>
  )
}

