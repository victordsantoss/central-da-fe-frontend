import { Box, Button, Card, CardContent, CircularProgress, TextField, Typography } from "@mui/material"
import { Controller, FormProvider } from "react-hook-form"
import { useEventInscriptionFormModel } from "./form.model"
import Image from "next/image"

interface IEventInscriptionFormViewProps {
  readonly id: string
}

export function EventInscriptionFormView({ id }: IEventInscriptionFormViewProps) {


  if (isLoadingEvent) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    )
  }

  if (!eventData) {
    return (
      <Typography color="error">
        Evento não encontrado
      </Typography>
    )
  }

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Typography variant="h3" component="h1">
            NOME TESTE
          </Typography>
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              Detalhes do Evento TESTE
            </Typography>
            <Typography>
              Data: TESTE
            </Typography>
            <Typography>
              Local: TESTE
            </Typography>
            <Typography>
              Valor: TESTE
            </Typography>
          </Box>

          {/* <FormProvider {...methods}>
            <Box
              component="form"
              onSubmit={methods.handleSubmit(onSubmit)}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Controller
                name="cpf"
                control={methods.control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="CPF"
                    placeholder="000.000.000-00"
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    onChange={(e) => handleCPFChange(e.target.value)}
                    disabled={userFound}
                  />
                )}
              />

              {userFound && eventData.price > 0 && (
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                  <Typography>
                    Escaneie o QR Code para realizar o pagamento
                  </Typography>
                  <Image
                    src="/qr-code-mock.png"
                    alt="QR Code para pagamento"
                    width={200}
                    height={200}
                  />
                </Box>
              )}

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSearchingUser || isRegistering || !methods.formState.isValid}
              >
                {isSearchingUser || isRegistering ? (
                  <CircularProgress size={24} />
                ) : userFound ? (
                  "Confirmar Inscrição"
                ) : (
                  "Buscar"
                )}
              </Button>
            </Box>
          </FormProvider> */}
        </Box>
      </CardContent>
    </Card>
  )
}
