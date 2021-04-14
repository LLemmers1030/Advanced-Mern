import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';

import './map.css';

//note: code formatted for ES6 here
export class MapContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            zoom: 19,
            address: '',
            mapTypeControl: true,
            // Set to default to satellite but IDK
            mapTypeId: 'satellite',
            disableDefaultUI: true,
            activeMarker: {},
            selectedPlace: {},
            mapCenter: {
                lat: 29.118300,
                lng: -82.100938
            },
            isOpen: false,
            mapMarker: null,
            showingInfoWindow: false,
            // showingInfoWindow: false
        }
    };

    onMarkerClick = (props, marker) => {
        this.setState({
            showingInfoWindow: true,
            selectedPlace: props,
            activeMarker: marker
        });
    };

    onInfoWindowClose = () =>
        this.setState({
            showingInfoWindow: false,
            activeMarker: null,
        });

    onMapCLicked = () => {
        if (this.set.showingInfoWindow)
            this.setState({
                activeMarker: null,
                showingInfoWindow: false
            });
    };

    render() {
        return (
            <div >
                {/* Trying to set default to satellite view*/}
                <Map zoom={this.state.zoom} className="googleMap" google={this.props.google}
                    initialCenter={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng,
                    }}
                    center={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng,
                    }}
                    mapType={this.state.mapTypeId}>

                    {/* House A */}
                    <Marker
                        name="House A"
                        position={{
                            lat: 29.118902807729818,
                            lng: -82.10081659956916
                        }}
                        clickable
                        onClick={this.onMarkerClick} />

                    {/* House B */}
                    <Marker
                        name="House B"
                        position={{
                            lat: 29.118687282511313,
                            lng: -82.10072498277634
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House C */}

                    <Marker
                        name="House C"
                        position={{
                            lat: 29.118581837812673,
                            lng: -82.10065792760207
                        }}
                        clickable
                        onClick={this.onMarkerClick} />

                    {/* House D */}
                    <Marker
                        name="House D"
                        position={{
                            lat: 29.118471701944134,
                            lng: -82.10061868804938
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House E */}
                    <Marker
                        name="House E"
                        position={{
                            lat: 29.11836567110728,
                            lng: -82.10051005862071
                        }}
                        clickable
                        onClick={this.onMarkerClick} />

                    {/* House 1 */}
                    <Marker
                        name="House 1"
                        position={{
                            lat: 29.118143650781686,
                            lng: -82.10058717221882
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House 2 */}
                    <Marker
                        name="House 2"
                        position={{
                            lat: 29.118112017273248,
                            lng: -82.1007018364859
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House 5 */}
                    <Marker
                        name="House 5"
                        position={{
                            lat: 29.11771027045072,
                            lng: -82.10086205540007
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House 6 */}
                    <Marker
                        name="House 6"
                        position={{
                            lat: 29.117599552441213,
                            lng: -82.10084260939917
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House 7 */}
                    <Marker
                        name="House 7"
                        position={{
                            lat: 29.117515573093534,
                            lng: -82.10086034870861
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House 8 */}
                    <Marker
                        name="House 8"
                        position={{
                            lat: 29.11740389210246,
                            lng: -82.10094788602672
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House 10 */}
                    <Marker
                        name="House 10"
                        position={{
                            lat: 29.117391004075245,
                            lng: -82.1012905381193
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House 11 */}
                    <Marker
                        name="House 11"
                        position={{
                            lat: 29.117516953226236,
                            lng: -82.10130327865525
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House 12 */}
                    <Marker
                        name="House 12"
                        position={{
                            lat: 29.11761888416635,
                            lng: -82.10130059649691
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House 13 */}
                    <Marker
                        name="House 13"
                        position={{
                            lat: 29.11772198673081,
                            lng: -82.10130126710315
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House 14 */}
                    <Marker
                        name="House 14"
                        position={{
                            lat: 29.11783387609505,
                            lng: -82.10129187931746
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House 15 */}
                    <Marker
                        name="House 15"
                        position={{
                            lat: 29.117965097111952,
                            lng: -82.10130059648132
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House 16 */}
                    <Marker
                        name="House 16"
                        position={{
                            lat: 29.118075229074833,
                            lng: -82.10130327871471
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House 17 */}
                    <Marker
                        name="House 17"
                        position={{
                            lat: 29.118188875919436,
                            lng: -82.1012932204196
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        onClose={this.onInfoWindowClose}
                        visible={this.state.showingInfoWindow}
                    >
                        <div>
                            <h3>{this.state.selectedPlace.name}</h3>
                        </div>
                    </InfoWindow>
                </Map>
            </div >
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAR8n5YnE8w6L8R7d8KEev8U58KUubp6sE')
})(MapContainer)