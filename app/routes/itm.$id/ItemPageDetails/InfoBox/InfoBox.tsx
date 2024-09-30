import { Box, Text } from "@mantine/core";
import React from "react";

export function InfoBoxData({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Box className="flex justify-between w-full gap-8">
      <Text c="dimmed">{title}</Text>
      <Text className="text-right">{children}</Text>
    </Box>
  );
}

// Row component to wrap two InfoBoxData components
function InfoBoxRow({ children }: { children: React.ReactNode }) {
  return <Box className="flex  gap-20">{children}</Box>;
}

// Main component that groups every two InfoBoxData components into a row
export function InfoBox({ children }: { children: React.ReactNode }) {
  const childrenArray = React.Children.toArray(children);

  // Group children into pairs of two
  const groupedChildren = childrenArray.reduce(
    (result: React.ReactNode[][], child, index) => {
      if (index % 2 === 0) {
        result.push([child]);
      } else {
        result[result.length - 1].push(child);
      }
      return result;
    },
    []
  );

  return (
    <Box>
      {groupedChildren.map((group, idx) => (
        <InfoBoxRow key={idx}>
          {group.map((child, childIdx) => (
            <React.Fragment key={childIdx}>{child}</React.Fragment>
          ))}
        </InfoBoxRow>
      ))}
    </Box>
  );
}
