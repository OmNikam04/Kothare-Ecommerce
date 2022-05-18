import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React,{useState} from "react";
import styled from "styled-components";
import { mobile } from "../../../responsive";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar.js";
import UserOptions from "./UserOptions";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import { logout } from "../../../actions/userAction";

const Container = styled.div`
  position: sticky;
  height: 60px;
  top: 0;
  background: white;
  ${mobile({ height: "55px" })}
  z-index:10;
  border-bottom:0.1px solid lightgray;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 35px;
  padding: 5px;
  ${mobile({ marginLeft:"3.3rem", width:"100px"})}
`;

const Input = styled.input`
  outline: none;
  border: none;
  ${mobile({ width: "120px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  color: red;
  ${mobile({ display: "none" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  color: #ff0077;
  ${mobile({ fontSize: "24px" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
  & ${MenuItem}:last-child {
    margin-left: 50px;
    ${mobile({marginLeft:"20px" })}
  }
`;

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const history = useHistory();
  const alert = useAlert();

  const logoutUser = ()=>{
    dispatch(logout());
    alert.success("Logout Successfully");
  }

  const navigateToLogin = ()=>{
    history.push('/login')
  }
  const navigateToCart = ()=>{
    history.push('/cart')
  }

  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    } else {
      history.push("/products");
    }
    // setKeyword('')
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
            <Navbar />
          </Language>
          <SearchContainer className="searchContainer_header">
            <form className="form_header" onSubmit={searchSubmitHandler}>
            <Input placeholder="Search" onChange={(e) => setKeyword(e.target.value)} />
              <Search
                style={{ color: "gray", fontSize: 16, textDecoration: "none" }}
              />
              <Input className="input-submit_header" type="submit" value="Search" />
            </form>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>kothari</Logo>
        </Center>
        <Right>
          {isAuthenticated ? (
            <MenuItem onClick={logoutUser}>Log out</MenuItem>
          ) : (
            <>
              {/* <MenuItem>REGISTER</MenuItem> */}
              <MenuItem onClick={navigateToLogin}>SIGN IN</MenuItem>
            </>
          )}

          <MenuItem onClick={navigateToCart}>
            <Badge badgeContent={cartItems.length} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          <MenuItem>{isAuthenticated && <UserOptions user={user} />}</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
