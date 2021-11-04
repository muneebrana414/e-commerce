import './App.css'
import team_01 from './Images/team_01.jpg';
import team_02 from './Images/team_02.jpg';
import team_03 from './Images/team_03.jpg';
import team_04 from './Images/team_04.jpg';
import team_05 from './Images/team_05.jpg';
import team_06 from './Images/team_06.jpg';


function TeamMember(){
    const teams =[
        {
            img: team_01,
            title: 'Johnny',
            post: 'Co-Founder'
        },
        {
            img: team_02,
            title: 'Karry',
            post: 'Product Expert'
        },
        {
            img: team_03,
            title: 'Michael',
            post: 'Chief Marketing'
        },
        {
            img: team_04,
            title: 'Marry',
            post: 'Product Specialist'
        },
        {
            img: team_05,
            title: 'George',
            post: 'Product Photographer'
        },
        {
            img: team_06,
            title: 'Kate',
            post: 'General Manager'
        }

    ]
    const team = teams.map((item, i) => {
        return <div className="item team-member" key={i}>
        <img src={item.img} alt='Team-Member'/>
        <div className='img-detail'>
            <h2 className='img-title'>{item.title}</h2>
            <h3 className='img-price'>{item.post}</h3>
            <p className='img-des'>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
        </div>
    </div>
    })
    return(
        <div className='items'>
            {team}
        </div>
    );
}


export default TeamMember;