/* eslint-disable max-len */
import path from "path";

import { $ } from "./util";

import { checkBuildArtifacts } from "./dawn-configuration";

const artifactsDir = path.resolve(__dirname, "../../artifacts");

console.log(`Copying artifacts from ${artifactsDir} to .`);
$("cp -R ${artifactsDir}/libs .");
$("cp -R ${artifactsDir}/cpp/webgpu cpp");
$("cp -R ${artifactsDir}/cpp/dawn cpp");

checkBuildArtifacts();
