import { Box, Container, Typography, Button, useTheme, useMediaQuery } from "@mui/material"
import Image from "next/image"

export function EventInscriptionView() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4
        }}
      >
        {/* Banner Section */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "1 1 50%" },
            position: "relative",
            height: isMobile ? "300px" : "800px",
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: theme.shadows[4]
          }}
        >
          <Image
            src="/assets/event-banner-mock.jpg"
            alt="Banner do evento"
            width={600}
            height={900}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px"
            }}
            priority
            quality={90}
          />
        </Box>

        {/* Event Details Section */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "1 1 50%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <Box>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: theme.palette.text.secondary,
                fontSize: { xs: "2rem", md: "2.5rem" }
              }}
            >
              What is Lorem Ipsum?
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: theme.palette.text.secondary,
                fontSize: { xs: "1rem", md: "1.1rem" }
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
          </Box>

          <Button
            variant="contained"
            size="large"
            onClick={() => {
              const formElement = document.getElementById("inscription-form")
              if (formElement) {
                formElement.scrollIntoView({ behavior: "smooth" })
              }
            }}
            sx={{
              py: 2,
              fontSize: { xs: "1.1rem", md: "1.2rem" },
              fontWeight: "bold",
              width: "100%",
              borderRadius: 2,
              textTransform: "none",
              boxShadow: theme.shadows[4],
              "&:hover": {
                transform: "translateY(-2px)",
                transition: "transform 0.2s ease-in-out"
              }
            }}
          >
            Inscrever-se Agora
          </Button>
        </Box>
      </Box>

      {/* Inscription Form Section */}
      <Box
        id="inscription-form"
        sx={{
          mt: 6,
          width: "100%"
        }}
      >
        {/* <EventInscriptionFormView id={id} /> */}
      </Box>
    </Container>
  )
}
