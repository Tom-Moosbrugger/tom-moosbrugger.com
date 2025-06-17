import projects from "./projects.json";
import { ProjectData } from "@/lib/types";
import { NextResponse } from "next/server";

const typeCheckedProjects: ProjectData[] = projects;

export function GET() {
  return NextResponse.json({ projects: typeCheckedProjects }, { status: 200 });
}
