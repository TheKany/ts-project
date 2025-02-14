// utils/map.ts
export function createMap(
  containerId: string,
  lat: number,
  lng: number,
  level: number
) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`지도를 표시할 '${containerId}' 요소가 없습니다.`);
    return null;
  }

  const options = {
    center: new kakao.maps.LatLng(lat, lng),
    level: level,
  };

  return new kakao.maps.Map(container, options);
}

export function createMarker(map: kakao.maps.Map, lat: number, lng: number) {
  return new kakao.maps.Marker({
    map,
    position: new kakao.maps.LatLng(lat, lng),
  });
}

export function createInfoWindow(content: string) {
  return new kakao.maps.InfoWindow({
    content: `<div style="padding:5px;font-size:12px;">${content}</div>`,
    zIndex: 1,
  });
}

export function addMarkerClickEvent(
  marker: kakao.maps.Marker,
  map: kakao.maps.Map,
  infowindow: kakao.maps.InfoWindow
) {
  kakao.maps.event.addListener(marker, "click", function () {
    infowindow.open(map, marker);
  });
}
