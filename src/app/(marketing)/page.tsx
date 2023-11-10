import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function App() {
  return (
    <main>
      <section>
        <h1 className="head-text">LunCo</h1>
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">NextUI</p>
              <p className="text-small text-default-500">nextui.org</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>LunCo is a open-source simulation tool designed for planning space missions, with a focus on lunar settlements. Built with the powerful Godot 4 engine, LunCo aims to revolutionize the way space engineers design and collaborate on complex systems.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/LunCoSim/lunco-sim"
            >
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
