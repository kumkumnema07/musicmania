import AdmissionForm from "../Components/AdmissionForm";
import ClassSection from "../Components/ClassSection";


export default function contact (){
    return(
        <>
         <div className="min-h-screen flex flex-col lg:flex-row">
             <AdmissionForm />
             <ClassSection />
         </div>
       
        </>
    )
}