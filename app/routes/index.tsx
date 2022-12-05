import Bold from "~/components/Bold"

import illustration from "app/images/illustration-home.svg"

const Homepage = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row-reverse pt-16">
        <div className="mb-12 lg:mb-0 w-full">
          <img
            src={illustration}
            alt="Home Illustration"
          />
        </div>
        <div className="text-center lg:text-left w-full px-4">
          <h1 className="font-hero text-5xl lg:text-7xl font-extralight mb-12">
            Immergiti nel mondo dello sviluppo web
          </h1>
          <p className="block font-hero font-light text-slate-600 mx-12 lg:mx-0 lg:mr-40 text-lg">
            Muovi i tuoi primi passi con <Bold>React</Bold>,{" "}
            <Bold>Typescript</Bold> ed altre librerie degne di importanza.
            <br />
            Non sarà necessaria nessuna conoscenza pregressa di{" "}
            <Bold>Javascript</Bold>, nonostante sia consigliata.
          </p>
        </div>
      </div>
    </div>

    // support@reactbricks.com
    // xcPtfBwdtg
    //
    // supporto@retteweb.it
    // Vt612!
  )
}

export default Homepage
