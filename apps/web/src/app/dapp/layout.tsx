import { PropsWithChildren, FC } from "react";
import { Box, Group, Paper, Stack } from "@mantine/core";
import AppHeader from "@/components/common/AppHeader";

export const metadata = {
    title: "DApp Editor",
    description: "Editor"
};

const DAppLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Stack w="100vw" h="100vh">
            <Paper shadow="sm">
                <AppHeader name={"project-1"} />
            </Paper>
            <Box style={{ flex: 1 }}>
                {children}
            </Box>
        </Stack>
    );
};

export default DAppLayout;
