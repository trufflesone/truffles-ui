import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

import { Button } from "../../components";

interface PaginationProps {
  selectedPage: number;
  setSelectedPage: (page: number) => void;
  totalPages: number;
}

const Pagination = ({
  selectedPage,
  setSelectedPage,
  totalPages,
}: PaginationProps) => {
  return (
    <div className="flex items-center justify-between px-2">
      <Button
        variant="outline"
        size="sm"
        onClick={
          selectedPage === 1
            ? undefined
            : () => setSelectedPage(selectedPage - 1)
        }
        disabled={selectedPage === 1}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> <span>Previous</span>
      </Button>
      <div className="flex flex-row space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
          if (page === 1 || page === totalPages) {
            return (
              <Button
                key={page}
                variant={selectedPage === page ? "outline" : "ghost"}
                size="sm"
                onClick={() => setSelectedPage(page)}
                data-state={selectedPage === page && "selected"}
              >
                {page}
              </Button>
            );
          }

          if (page === selectedPage - 1 || page === selectedPage + 1) {
            return (
              <Button
                key={page}
                variant={selectedPage === page ? "outline" : "ghost"}
                size="sm"
                onClick={() => setSelectedPage(page)}
                data-state={selectedPage === page && "selected"}
              >
                {page}
              </Button>
            );
          }

          if (page === selectedPage) {
            return <div key={page}>...</div>;
          }

          return null;
        })}
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={
          selectedPage === totalPages
            ? undefined
            : () => setSelectedPage(selectedPage + 1)
        }
        disabled={selectedPage === totalPages}
      >
        <span>Next</span> <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default Pagination;
