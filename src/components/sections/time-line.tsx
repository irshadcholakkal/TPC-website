import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Global Inventory Sync",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Real-time synchronization across Amazon, Noon, and local platforms.
          </p>
         
        </div>
      ),
    },
    {
      title: "Automated Logistics",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
           "Smart routing for deliveries to minimize customized costs.",
       
          </p>
         
          
        </div>
      ),
    },
    {
      title: "Financial Analytics",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
Profit & Loss consolidated view for all your channels."          </p>
         
          
        
           
          
        </div>
      ),
    },
      {
      title: "Marketing Automation",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
"Unified ad campaigns that auto-optimize based on ROI.",
              
          </p>
         
          
        </div>
      ),
    },


 {
      title: "Multi-Channel Setup",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            "Launch on new marketplaces in a single click. We handle the registration and compliance.",
       
          </p>
         
          
        </div>
      ),
    },


  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
