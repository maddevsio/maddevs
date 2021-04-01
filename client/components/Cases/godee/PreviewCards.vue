<template>
  <section
    class="container_full background-color-black-godee p-100_top p-100_bottom media-p-48_top media-p-48_bottom"
  >
    <div class="container_regular">
      <div class="case_preview-cards">
        <div class="case_preview-cards-top-cards-wrapper">
          <Card class="background-color-godee-black-card">
            <CardGoDeePreview
              :mobile-image="false"
              :width="334"
              :height="211"
              class-name="application-for-passengers"
              title="Mobile application for passengers"
              description="Ticket booking process is intuitive — the passenger needs to select the pick up and drop off points, choose the departure time in the schedule, and book the ticket. The most suitable route will be found automatically."
              picture-folder="godee"
              file-name="application-for-passengers-card"
              file-extension="png"
              mobile-image-name=""
              alt="GoDee: Bus Transit App for Passengers."
            />
          </Card>
          <Card class="background-color-godee-black-card">
            <CardGoDeePreview
              :mobile-image="false"
              :width="313"
              :height="280"
              class-name="application-for-drivers"
              title="Mobile applications for drivers"
              description="The drivers’ transit app enables them to pick up passengers from bus stops, according to their previously booked tickets."
              picture-folder="godee"
              file-name="application-for-drivers-card"
              file-extension="png"
              mobile-image-name=""
              alt="GoDee: Bus Drivers App."
            />
          </Card>
        </div>
        <Card class="background-color-godee-black-card">
          <CardGoDeePreview
            :mobile-image="true"
            :width="695"
            :height="219"
            class-name="godee-admin-panel"
            title="Intelligent management panel"
            description="Used to create routes, get reports and map current active routes."
            picture-folder="godee"
            file-name="godee-admin-panel-card"
            file-extension="png"
            mobile-image-name="godee-admin-panel-card-mobile"
            alt="GoDee: Bus App Management System."
          />
        </Card>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '@/components/Cases/shared/Card'
import CardGoDeePreview from '@/components/Cases/godee/cards/CardGoDeePreview'

export default {
  name: 'PreviewCards',
  components: {
    Card,
    CardGoDeePreview,
  },
}
</script>
