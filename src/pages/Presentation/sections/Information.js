/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Bilişim Teknolojilerinden
                    <br />
                  </>
                }
                description="Sunucu Sistemleri, İnternet Alt Yapıları, Fiber Alt Yapılar, Bilgisayar Sistemleri"
              />
              <RotatingCardBack
                image={bgBack}
                title="Güvenlik Sistemlerine Kadar Herşey "
                description="Güvenlik Sistemleri, Kapalı Devre Kamera Sistemleri, Alarm Sistemleri, Yangın Alarm ve İhbar Sistemleri"
                action={{
                  type: "internal",
                  route: "/pages/authentication/sign-in",
                  label: "hemen üye olarak bize katılabilirsiniz!",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Tam Zamanlı Destek"
                  description="Bizlere 7/24 Ulaşarak İstediğiniz Konuda Teknik Destek Alabilirsiniz."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Tecrübeli Ekip ve Alanında Uzman Kişiler"
                  description="Alanında Uzman Kişilerin Oluşturduğu Ekibimiz Sizlere En Güncel ve En İyi Hizmeti Sunmaktadır"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Zamandan Tasarruf & Paradan Tasarruf"
                  description="En Güncel ve En Yenilikçi Çözümleri Zamandan ve Paradan Tasarruf Ederek Sizlere Sunuyoruz"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Ürün Yelpazesi"
                  description="Geniş Ürün Yelpazesi İle Sizlere Bir Çok Ürün Sunmaktayız"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
