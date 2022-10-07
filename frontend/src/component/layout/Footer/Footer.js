import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../../../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  border-top:1px solid grey;
  background:#2b2a2a;
  color:white;
  margin-top:10vmax;
  ${mobile({ flexDirection: "column", background:"#2b2a2a", color:"white"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  cursor:pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none", background:"#2b2a2a", color:"white" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ background:"#2b2a2a", color:"white" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Kothari's Luggauge Mall.</Logo>
        <Desc>
        Kothari's Luggage Mall in Nashik is one of the leading businesses in the Authorised Dealers. Also known for Authorised Dealers, Authorised Dealers-Samsonite and much more. Find Address, Contact Number, Reviews and ratings, Photos, Maps of Kothari's Luggage Mall, Nashik.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem><Link to="/" style={{textDecoration:"none" , color: "white"}}>Home</Link></ListItem>
          <ListItem><Link to="/products" style={{textDecoration:"none" , color: "white"}}>All Products</Link></ListItem>
          <ListItem><Link to="/cart" style={{textDecoration:"none" , color: "white"}}>My Cart</Link></ListItem>
          <ListItem><Link to="/account" style={{textDecoration:"none" , color: "white"}}>My Account</Link></ListItem>
          <ListItem><Link to="/orders" style={{textDecoration:"none" , color: "white"}}>My Orders</Link></ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Devloped by - Om Nikam</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> L-16, Utility Cerlife, Opp. Rajiv Gandhi Bhavan, Sharanpur road, Nashik-2 (M.S) INDIA
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/>+91-0253-2313874
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> kotharimall0102@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
