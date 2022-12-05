import Bold from "~/components/Bold"

import illustration from "app/illustration-home.svg"

const Homepage = () => {
  return (
    <div>
      <div className="grid grid-cols-2 pt-16">
        <div>
          <h1 className="font-hero text-7xl font-extralight mb-12">
            Immergiti nel mondo dello sviluppo web
          </h1>
          <p className="block font-hero font-light text-slate-600 mr-40 text-lg">
            Muovi i tuoi primi passi con <Bold>React</Bold>,{" "}
            <Bold>Typescript</Bold> ed altre librerie degne di importanza.
            <br />
            Non sarà necessaria nessuna conoscenza pregressa di{" "}
            <Bold>Javascript</Bold>, nonostante sia consigliata.
          </p>
        </div>
        <div>
          <img
            src={illustration}
            alt="Home Illustration"
          />
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
