import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

function Docs(){
   return (
    <SwaggerUI url="https://storage.googleapis.com/overstrategize-viclo/overstrategize.json" />
   )
}
export default Docs;