import styled from "styled-components";
const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
            <CTALogoOne src="/images/logo-1.jpeg" alt=''>

            </CTALogoOne>

            <Signup>
            SignUp for laughs
            </Signup>

            <Description>
                welcome to comedy forest
                your one stop solution to world s best 
                comedy shows
            </Description>
            <CTALogoTwo src=""></CTALogoTwo>
        
        </CTA>
        
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
const BgImage = styled.div`
height:100%;
width:100%;
max-width:auto;
background-position: top;
background-size: 60% auto;
background-repeat: no-repeat;
background-image: url("/images/login-background-image1.jpeg");
position: absolute;
top:10;
right:10;
left:0;
z-index:-1;
`;

const CTA=styled.div`
margin-bottom: 2vw;
max-width: 150px;
width: 100%
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content:center;
margin-top:120;
align-items:center;
text-align: center;
margin-right: auto;
margin-left: auto;
transition-timing-function: ease-out;
transition: opacity 0.2s;
width:100%;

`;
const CTALogoOne=styled.img`
margin-bottom: 02px;
max-width; 60px;
min-height:1px;
display:block;
width:10%;

`;

const Signup=styled.a`

font-weight: bold;
color:#f9f9f9;
background-color: #0063e5;
margin-bottom:12px;
width:100%;
letter-spacing:1.5px;
font-size:18px;
padding:16.5px;
border:1px solid transparent;
border-radius 4px;
&:hover{
    background-color:#0052d9;
}

`
const Description=styled.p`

color: hsla(0,0%,95.3%,1);
font-size;11px;
margin:0 0 24px;
line-height; 1.5;
letter-space:1.5;
`;

const CTALogoTwo=styled.img`

max-width:600px;
margin-bottom:20px;
display:inline-block;
vertical-align:bottom;
width: 100% auto;



`
export default Login;
