export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-orange1 p-2 rounded">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L4 7V17L12 22L20 17V7L12 2Z"
            fill="white"
          />
        </svg>
      </div>
      <span className="text-xl font-bold text-black2">FootHub</span>
    </div>
  )
}
