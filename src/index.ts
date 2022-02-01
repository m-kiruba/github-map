/*
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */
import './style.css';

// This example creates a simple polygon representing the Bermuda Triangle.

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById('map') as HTMLElement,
    {
      zoom: 3,
      // center: { lat: 48.89, lng: 2.27 },
      center: { lat: -14.49, lng: 113.4124 },
      mapTypeId: 'terrain',
    }
  );

  // map.data.addGeoJson({"type": "Polygon", "coordinates": [[[-14.490388809275634, 113.41248278596146]], [[-14.064510245635853, 154.98474609649153]], [[-43.81262309331945, 161.40076136429002]], [[-39.6161545986056, 108.49060805997902]]]})

  // Define the LatLng coordinates for the polygon's path.
  const triangleCoords = [
    { lat: -11.990388809275634, lng: 110.51 },
    { lat: -0.964510245635853, lng: 154.48474609649153 },
    { lat: -43.81262309331945, lng: 161.40076136429002 },
    { lat: -39.6161545986056, lng: 108.49060805997902 },
  ];

  // const triangleCoords = [
  //   { lat: 48.89, lng: 2.27 },
  //   { lat: 48.89, lng: 2.42 },
  //   { lat: 48.81, lng: 2.42 },
  //   { lat: 48.81, lng: 2.27 },
  // ];

  // Construct the polygon.
  const bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
  });

  bermudaTriangle.setMap(map);
}
export { initMap };
