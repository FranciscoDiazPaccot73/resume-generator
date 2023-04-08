import Stepper from "../Stepper";

export default function Template({ children }) {
  return (
    <div>
      <Stepper />
      {children}
    </div>
  )
}