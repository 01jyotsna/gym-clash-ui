function HomeView() {
    return `
        ${ checkInCardView() }
        ${ friendsStatusView() }
    `;
}

function checkInCardView() {
    return `
        <ion-card>
            <img alt="gym-girl-working-her-ass-off" src="../src/res/woomen-working-out.png" />
            <ion-card-header>
                <ion-card-title>Are you in Gym?</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                If you are in Gym, Please check in to notify your friends
                <ion-button expand="block" size="small" fill="clear">Check In</ion-button>
            </ion-card-content>
        </ion-card>
    `;
}

function friendsStatusView() {
    return `
        <div class="ion-padding" style="padding-top: 0;">
            <ion-grid style="padding-top: 0;">
                <ion-row class="ion-align-items-center">
                    <ion-col>
                        <h3>Your Friends Status</h3>
                    </ion-col>
                    <ion-col size="auto">
                        <ion-button fill="clean" size="small">
                            <ion-icon name="refresh"></ion-icon>
                        </ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <ion-list>
            ${ getListItem("Ashwin", "Still Alive") }
            ${ getListItem("Yashwanth", "Dead") }
            </ion-list>
            <ion-infinite-scroll>
                <ion-infinite-scroll-content></ion-infinite-scroll-content>
            </ion-infinite-scroll>
        </div>
    `;
}

function getListItem(name, status) {
    return `
        <ion-item>
            <ion-label>${name}</ion-label>
            <ion-chip>${status}</ion-chip>
        </ion-item>
    `;
}