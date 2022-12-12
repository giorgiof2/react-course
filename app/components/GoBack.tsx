import { useNavigate } from "react-router-dom"
import { TiArrowBackOutline } from "react-icons/ti"

const GoBack = () => {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(-1)}
      className="px-4 py-2 border rounded flex items-center justify-center space-x-1 text-sky-900 hover:border-sky-800 transition-colors font-medium">
      <TiArrowBackOutline />
      <span>Go back</span>
    </button>
  )
}

export default GoBack
