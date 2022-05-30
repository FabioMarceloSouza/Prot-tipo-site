import { Col, Container, Row } from "react-bootstrap";
import { Dashboard } from "../../../shared/components/dashboard/Dashboard";
import { Footer } from "../../../shared/components/footer/Footer";
import { PrivateHader } from "../../../shared/components/prvateHeader/PrivateHeader";
import { SideMenu } from "../../../shared/components/sidemenu/SideMenu";
import './privateHome.css';

export const PrivateHome = () => {
    return (
        <>
         <PrivateHader />
              <Container className="p-60 container-private-home">
                  <Row className="justify-content-between">
                      <SideMenu />
                      <Dashboard />
                  </Row>
              </Container>
         <Footer />
      </>
  )
}