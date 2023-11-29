import { WiredSpinner } from "react-wired-elements"
import { WithLoadingProps } from "../../types"

function WithLoading<P extends object>(Component: React.ComponentType<P>) {
  return function WithLoadingComponent(
    props: Omit<P, keyof WithLoadingProps> & WithLoadingProps,
  ) {
    const { isLoading, ...rest } = props

    if (!isLoading) return <Component {...(rest as P)} />

    return (
      <div style={{ textAlign: "center", width: "800px" }}>
        <WiredSpinner spinning />
      </div>
    )
  }
}

export default WithLoading
