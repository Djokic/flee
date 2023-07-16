import { JSX } from "react";

export function getLayoutFn(Layout: any) {
  return function getLayout(page: JSX.Element) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
}