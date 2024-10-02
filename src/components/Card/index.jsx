import { BiLogoHtml5, BiLogoAndroid, BiBuilding } from 'react-icons/bi'

const courses = [
    {
        title : 'Web Deveploment',
        icon : <BiLogoHtml5 />
    },
    {
        title : 'App Deveploment',
        icon : <BiLogoAndroid />
    },
    {
        title : 'Ux & Ui',
        duratuin : '2 Hours',
        icon : <BiBuilding />
    }
]

function index() {
  return (
    <div className="card--container">
        {
            courses.map( (item) => (
                <div className="card">
                    <div className="card--cover">{item.icon}</div>
                    <div className="card--title">
                        <h2>{item.title}</h2>
                    </div>
                </div>

            ))
        }
    </div>
  )
}

export default index
