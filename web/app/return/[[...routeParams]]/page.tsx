type PageParams = {
  params: {
    routeParams: string[];
  }
}

export default function Page({ params: { routeParams }}: PageParams) {
  const [origins, destinations, departures, returns] = routeParams || [];

  console.log('Params', origins, destinations, departures, returns);
  
  return (
    <div>
      Return Search
    </div>
  )
}
