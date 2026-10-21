"use client";

import { Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface EmptyStateProps {
  message: string;
}

function EmptyState({ message }: EmptyStateProps) {
  return <p className="text-sm text-copy-muted">{message}</p>;
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      aria-label="Projects"
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={cn(
        "absolute inset-y-0 left-0 z-40 flex w-80 flex-col border-r border-surface-border bg-surface transition-transform duration-200 ease-out",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <div className="flex h-14 shrink-0 items-center justify-between border-b border-surface-border px-4">
        <h2 className="text-sm font-semibold text-copy-primary">Projects</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          aria-label="Close sidebar"
          className="text-copy-muted hover:bg-subtle hover:text-copy-primary"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <Tabs
        defaultValue="my-projects"
        className="min-h-0 flex-1 flex-col gap-0 px-3 pt-3"
      >
        <TabsList className="h-9 w-full rounded-xl bg-base p-1">
          <TabsTrigger
            value="my-projects"
            className="rounded-lg text-copy-muted data-[state=active]:bg-subtle data-[state=active]:text-copy-primary"
          >
            My Projects
          </TabsTrigger>
          <TabsTrigger
            value="shared"
            className="rounded-lg text-copy-muted data-[state=active]:bg-subtle data-[state=active]:text-copy-primary"
          >
            Shared
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="my-projects"
          className="items-center justify-center data-[state=active]:flex"
        >
          <EmptyState message="No projects yet." />
        </TabsContent>
        <TabsContent
          value="shared"
          className="items-center justify-center data-[state=active]:flex"
        >
          <EmptyState message="No shared projects yet." />
        </TabsContent>
      </Tabs>

      <div className="shrink-0 border-t border-surface-border p-4">
        <Button className="w-full">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </aside>
  );
}
