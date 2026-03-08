function app() {
    return `
    <ion-tabs>
        <ion-tab tab="home">
            <ion-content>
                ${ HomeView() }
            </ion-content>
        </ion-tab>
        <ion-tab tab="calendar">
            <ion-content>
                Hello, This is Calendar
            </ion-content>
        </ion-tab>
        <ion-tab tab="gallery">
            <ion-content>
                Hello, This is Gallery
            </ion-content>
        </ion-tab>
        <ion-tab tab="settings">
            <ion-content>
                Hello, This is settings
            </ion-content>
        </ion-tab>
        <ion-tab-bar slot="bottom">
            <ion-tab-button tab="home">
                <ion-icon name="home"></ion-icon>
                Home
            </ion-tab-button>
            <ion-tab-button tab="calendar">
                <ion-icon name="calendar"></ion-icon>
                Calendar
            </ion-tab-button>
            <ion-tab-button tab="gallery">
                <ion-icon name="images"></ion-icon>
                Gallery
            </ion-tab-button>
            <ion-tab-button tab="settings">
                <ion-icon name="cog"></ion-icon>
                Settings
            </ion-tab-button>
        </ion-tab-bar>
    </ion-tabs>
    `;
}