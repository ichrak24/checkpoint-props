import React , {Component} from 'react'; 
import {Layout , Header  , Navigation, Content} from 'react-mdl';

export default class Navbarcomponent extends Component{
    render()
{ 
    return (

<div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}> </span><strong>My page</strong></span>}>
            <Navigation>
                
                <a href="#Aboutme">about me</a>
               
                <a href="#Contact">contact</a>
            </Navigation>
        </Header>
       
        <Content />
    </Layout>
</div>

    );
}
};