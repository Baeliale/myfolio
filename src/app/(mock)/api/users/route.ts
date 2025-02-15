import { NextResponse } from "next/server";
import users from "../../../../mock/users/users.json"

export const GET = async () => {
  return NextResponse.json({users});
};