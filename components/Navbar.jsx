import Link from "next/link";
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from "@chakra-ui/react";
import { FcMenu } from "@react-icons/all-files/fc/FcMenu"
import { FcHome } from "@react-icons/all-files/fc/FcHome";
import { FcAbout } from "@react-icons/all-files/fc/FcAbout";
import {BsSearch} from "@react-icons/all-files/bs/BsSearch"
import {FiKey}  from "@react-icons/all-files/fi/FiKey"

const Navbar = () => (
     <Flex p="2" borderBottom="1px" borderColor="grey.100">
       <Box fontSize="3xl" color="blue.400" fontWeight="bold">
         <Link href="/" paddingLeft="2">Realtor</Link>
       </Box>
       <Spacer />
       <Box>
           <Menu>
               <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
               <MenuList>
                   <Link href="/" passHref>
                       <MenuItem icon={<FcHome />}>Home</MenuItem>
                   </Link>
                   <Link href="/search" passHref>
                       <MenuItem icon={<BsSearch />}>Search</MenuItem>
                   </Link>
                   <Link href="/search?purpose=for-sale" passHref>
                       <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                   </Link>
                   <Link href="/search?purpose=for-rent" passHref>
                       <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                   </Link>
               </MenuList>
           </Menu>
       </Box>
     </Flex>
)

export default Navbar;