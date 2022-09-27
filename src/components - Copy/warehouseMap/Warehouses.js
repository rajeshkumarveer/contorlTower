import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, Polygon } from 'react-leaflet'
import L from 'leaflet';
import { statesData } from './data/data';
import { Card, CardContent, Typography, CardMedia, Button, CardActions } from '@mui/material';
import { useRouter } from 'next/router'

let DefaultIcon = L.icon({
    iconUrl: "/marker.png",
    popupAnchor: [-0, -0],
    iconSize: [25, 35],
});

function Warehouses() {
    const router = useRouter()
    const position = [37.63463151377654, -97.89969605983609];
    const listofMarker = [
        {
            id: 1,
            name: "southampton warehouse (Linon)",
            desc: "All chairs and tables products available.",
            img : "/images/warehouse/whimg1.jpg",
            position: [41.11740180365921, -73.73283199515511]
        },
        {
            id: 2,
            name: "Danville warehouse (Linon)",
            desc: "All wodden Chairs category available",
            img : "/images/warehouse/whimg2.jpg",
            position: [36.79671174872053, -79.49809335440354]
        },
        {
            id: 3,
            name: "Oklahorma warehouse (Linon)",
            desc: "Kids furniture products available",
            img : "/images/warehouse/whimg3.jpg",
            position: [39.29343410445806, -115.69569983641837]
        },
        {
            id: 4,
            name: "Nevada warehouse (Linon)",
            desc: "Soffa and mixed product available",
            img : "/images/warehouse/whimg4.jpg",
            position: [35.04603604675851, -97.02037107628148]
        },
    ]

    return (
        <MapContainer center={position} zoom={4} scrollWheelZoom={false} minZoom={2} >
            <TileLayer
                //   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                //   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=mjXOh4cXiOflvjtSBSrr"
            // attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
            {
                statesData.features.map((state, i) => {
                    const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);
                    return (<Polygon key={i}
                        pathOptions={{
                            // FD8D3C
                            fillColor: '#FC4E2A',
                            fillOpacity: 0.2,
                            weight: 2,
                            opacity: 1,
                            dashArray: 3,
                            color: 'white'
                        }}
                        positions={coordinates}
                    />)
                })
            }
            {
                listofMarker.map((marker, i) => {
                    console.log(marker);
                    return (
                        <Marker position={marker.position} key={i} icon={DefaultIcon} >
                            <Popup style={{margin:"0px"}}>
                                <Card sx={{ width: 255, m: 0, p: 1 }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image={marker.img}
                                    />
                                    <CardContent sx={{p:1, pb: 1 }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {marker.name}
                                        </Typography>
                                        <Typography variant="body" color="text.secondary">
                                            {marker.desc}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="error" variant="contained" onClick={()=>router.push(`/content/warehouse/detail/${marker.id}`)}>Visit</Button>
                                    </CardActions>
                                </Card>
                            </Popup>
                        </Marker>
                    );
                })
            }
        </MapContainer>

    )
}

export default Warehouses