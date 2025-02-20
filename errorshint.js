Error:
  x Expression expected
    ,-[E:\React\project22-nextjs-theme3\app\Components\Header.tsx:9:1]
  9 |
 10 | export default function Header() {
 11 |
 12 |   return <>
    :          ^
 13 |           <Container>
 14 |                   <section>
 14 |                           <Image src={} />
    `----

errori ke rooye <Container> ya <Image src={} /> ya <MenuItem> ya har componenti masalan az materaial ui ya nextjs ya ... bood,
vali agar oon component bardasheshood kar kard, bekhatere ineke src khaliye ya baraye <MenuItem> property open nazashtim. berim rooye khode error ellat ro neshoon mide,
na dalile error ro tooye browser ya terminal begardim.
---------------------------------------------------------
./app/Components/MidCom/Services.tsx:8:0
Module not found: Can't resolve '../images/001-unlock.png'
   6 | import Typography from '@mui/material/Typography';
   7 | import Image from 'next/image';
>  8 | import unlock from '../images/001-unlock.png'
hammoon addressdehiye eshtebah ast.
----------------------------------------------------------
Type '{ title: string; bread: string; }' has no properties in common with type 'IntrinsicAttributes'.ts(2559)
in error vaghti dorost mishe ke be component referencei ke barmigarde ba props begire, chon 'props' naneveshe baraye in
error mide: compo(props) {}
-----------------------------------------------------------
error hot reloading or fast refresh for browser
in ba update kardane nodejs, npm, nextjs dorost mishe.
-----------------------------------------------------------
vaghti yek component tsx jadid misazim, agar console.log begirim chizi neshoon nemide, bayad yek bar npm ro stop va start konim
ta dorost beshe.