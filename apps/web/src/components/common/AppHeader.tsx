import {
    Avatar,
    Group,
    Text,
    Menu,
    MenuTarget,
    MenuDropdown,
    MenuItem,
    MenuDivider,
    MenuLabel,
    Title
} from "@mantine/core";
import { FC } from "react";

import classes from "./AppHeader.module.css";

const AppHeader: FC<{ name?: string }> = ({ name }) => {
    return (
        <Group justify="space-between" h={60} w="100%" px={30}>
            <Group>
                <Text>hello world</Text>
            </Group>
            <Group>
                <Menu width={240} position="bottom-end" radius="lg">
                    <MenuTarget>
                        <Avatar
                            src="https://image.uisdc.com/wp-content/uploads/2023/07/Humanoid-mecha-20230725-1.png"
                            size="md"
                        />
                    </MenuTarget>
                    <MenuDropdown className={classes.dropDown}>
                        <MenuLabel>
                            <Title
                                order={6}
                                fw={500}
                                style={{
                                    color: "var(--mantine-color-gray-9)"
                                }}
                            >
                                Roger Liao
                            </Title>
                            <Text
                                size="sm"
                                style={{
                                    color: "var(--mantine-color-gray-6)"
                                }}
                            >
                                roger_liao@hotmail.com
                            </Text>
                        </MenuLabel>
                        <MenuDivider />
                        <MenuItem>DashBoard</MenuItem>
                    </MenuDropdown>
                </Menu>
            </Group>
        </Group>
    );
};

export default AppHeader;
