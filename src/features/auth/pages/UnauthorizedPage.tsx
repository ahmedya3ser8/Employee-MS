
const UnauthorizedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl font-bold text-red-500">
        403 - Unauthorized
      </h1>

      <p className="text-gray-500 mt-2">
        You don’t have permission to access this page.
      </p>
    </div>
  )
}

export default UnauthorizedPage;
